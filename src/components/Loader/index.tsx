import { PulseLoader } from 'react-spinners'

import { colors } from '../../styles'

import { LoaderContainer } from './style'

const Loader = () => (
  <LoaderContainer>
    <PulseLoader color={colors.primary} />
  </LoaderContainer>
)

export default Loader
