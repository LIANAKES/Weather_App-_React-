import styled from "@emotion/styled"

export const Card = styled.div`
  padding: 5px;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 30px;
  text-align: center;
  width: 400px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2); 
  margin-top: 20px; 
  margin-left: -100px;
`;


export const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  
`;

export const Temperature = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: #ff8c00;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin: 10px 0;
`;

export const InfoCloud = styled.div`
  display: inline-block;
  background: #dbeafe;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 50%;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  min-width: 80px;
`;


export const DeleteButton = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  font-size: 14px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;
