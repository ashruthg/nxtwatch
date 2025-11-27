import Loader from 'react-loader-spinner'
import {LoaderContainer} from './styledComponents'

const LoaderEl = () => (
  <LoaderContainer data-testid="loader">
    <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
  </LoaderContainer>
)

export default LoaderEl
