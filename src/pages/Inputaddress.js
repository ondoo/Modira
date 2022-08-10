import React from "react";
import useAddressSearch from "../fucntion/useAddressSearch";
import styled from "styled-components";

// const API_KEY = process.env.REACT_APP_API_KEY;

const Inputaddress = () => {
  const [query, setQuery] = React.useState("");
  const [showInput, setShowInput] = React.useState("");
  const [pageNumber, setPageNumber] = React.useState(1);

  const { addresses, hasMore, loading, error } = useAddressSearch(
    query,
    pageNumber
  );

  const oberver=React.useRef();

  const lastBookElementRef=React.useCallback(
    (node)=>{
      if(loading) return
      if(oberver.current) oberver.current.disconnect()
      oberver.current=new IntersectionObserver(entries=>{
     if(entries[0].isIntersecting){
      setPageNumber(prevPageNumber=>prevPageNumber+1)
     }
      }
      )
      if(node) oberver.current.observe(node)
    }
  ,[loading,hasMore]);


  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
    setShowInput(e.target.value)
  };

  return (
    <div >
      <WrapInput>
        <div>{"<"}</div>
      <InputAddress placeholder="동명(읍,면)으로 검색(ex. 서초동)" onChange={handleSearch} />
      </WrapInput>
     
      <div style={{  flexDirection: "column",}}>
        {!loading&&<div style={{fontWeight:"bold"}}>'{showInput}' 검색결과</div>}
        <WrapSearch>
        {addresses.map((address,i) => {
          if(address.length===i+1){
            return <TextSearch ref={lastBookElementRef} key={address}>{address}</TextSearch>;
          }else{
            return <TextSearch  key={address}>{address}</TextSearch>;
          }
          
        })}
        </WrapSearch>
     
      </div>

      <div>{loading && "loading...."}</div>
      <div>{error && "Error"}</div>
    </div>
  );
};

export default Inputaddress;

const WrapSearch=styled.div`
width: 100%;
/* background-color: yellow; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const WrapInput=styled.div`
display: flex;
align-items:center;
justify-content: center;
width: 100%;
`

const InputAddress=styled.input`
width: 90%;
height: 59px;
border: none;
border-bottom: 1px solid blue;

&:focus{
  outline: none;
}

`
const TextSearch=styled.div`
width: 90%;
border-bottom: 0.1px solid black;
/* background-color:green; */
`

