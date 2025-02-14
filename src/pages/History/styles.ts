import styled from "@emotion/styled"

export const HistoryContainer = styled.div`
background: url('https://s3-alpha-sig.figma.com/img/8b93/6aad/1a8a9bb19893d9b0ef5acb10326ff9b1?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CPSTsoTyhWOaTu8mDiKnG1iK4sU9PIB1Q4d7T3BpjUCn3teRUFzV9~7h~c3OZg7sn5VzQoGc52pIItWuU7M3fkImvfGEBd3n2JUK2JlCoJiakI0VPhEZXfmIYnVRsjINVaud-cZMmu9l-aYktAC1hgVS6yJr~AFn-7hcfYNdgTYahj3A1KH1c4jOmHmMH3QRYfK6LTDcOOmZZeiog0Y5vpcr9zQjbz6EaYeo5m6Ac3Z2oF6o5Cdd1kb06GZxFSgvh9ZScxJO-KyvgXHEdarIEnBnkaPLk9TLTga6T~LFUV6WO6OzRTf2BMqLNa2YbDzHhwm9NRw~ycSXvX9YrGcaEA') 
    no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh; 
  align-items: center;
  padding: 20px;
  text-align: center;

`;

export const CardsContainer = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const ClearButton = styled.button`
 margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: darkred;
  }
`;
