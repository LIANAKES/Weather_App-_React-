import styled from "@emotion/styled";


export const HomePageWrapper = styled.div`
background: url('https://s3-alpha-sig.figma.com/img/8b93/6aad/1a8a9bb19893d9b0ef5acb10326ff9b1?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CPSTsoTyhWOaTu8mDiKnG1iK4sU9PIB1Q4d7T3BpjUCn3teRUFzV9~7h~c3OZg7sn5VzQoGc52pIItWuU7M3fkImvfGEBd3n2JUK2JlCoJiakI0VPhEZXfmIYnVRsjINVaud-cZMmu9l-aYktAC1hgVS6yJr~AFn-7hcfYNdgTYahj3A1KH1c4jOmHmMH3QRYfK6LTDcOOmZZeiog0Y5vpcr9zQjbz6EaYeo5m6Ac3Z2oF6o5Cdd1kb06GZxFSgvh9ZScxJO-KyvgXHEdarIEnBnkaPLk9TLTga6T~LFUV6WO6OzRTf2BMqLNa2YbDzHhwm9NRw~ycSXvX9YrGcaEA') 
    no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh; 
  align-items: center;
  padding: 3px;
  z-index: 1;


  @media (max-width: 768px) {
    background-position: center top;
  }
`;

export const UserFormName = styled.input`
  width: 300px; 
  height: 40px; 
  border-radius: 25px;  
  padding:  14px;  
  font-size: 16px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #007BFF;
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoadingText = styled.p`
  color: #007BFF;
  font-weight: bold;
`;

export const Loader = styled.p`
  font-size: 18px;
  color: blue;
  font-weight: bold;
`;

export const ErrorMessage = styled.p`
 color: red;
  font-size: 25px;
  margin-top: 20px;
  text-align: center;
  text-align: left; 
  width: 100%; 
  padding-left: 45px; 
`;