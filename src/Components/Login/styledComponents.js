import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginFormContainer = styled.form`
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  padding: 40px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  min-width: 350px;

  @media (max-width: 576px) {
    padding: 30px;
    min-width: 300px;
  }
`

export const Logo = styled.img`
  height: 40px;
  width: auto;
  margin-bottom: 30px;
`

export const LabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`

export const LabelEl = styled.label`
  color: ${props => (props.isDark ? '#ffffff' : '#64748b')};
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
`

export const InputEl = styled.input`
  padding: 10px 12px;
  border: 1px solid ${props => (props.isDark ? '#475569' : '#cbd5e1')};
  border-radius: 4px;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #3b82f6;
  }
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-bottom: 20px;
  gap: 8px;
`

export const ShowPasswordInputEl = styled.input`
  cursor: pointer;
`

export const ShowPasswordLabel = styled.label`
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-size: 14px;
  cursor: pointer;
  margin: 0;
`

export const LoginButton = styled.button`
  width: 100%;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb;
  }
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  font-size: 12px;
  margin-top: 10px;
  align-self: flex-start;
`
