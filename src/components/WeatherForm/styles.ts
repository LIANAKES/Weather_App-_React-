import styled from "@emotion/styled"

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-right: 10px; 
  border: 1px solid #ccc;
  border-radius: 30px;
  flex-grow: 1; 
  width: 350px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: #166ee0;
  color: white;
  border: none;
  border-radius: 30px; 
  cursor: pointer;
  width: 120px;

  &:hover {
    background-color: #0f97e6;
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 25px;
  margin-top: 20px;
  text-align: center;
  text-align: left; 
  width: 100%; 
  padding-left: 45px; 
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px; 

`;