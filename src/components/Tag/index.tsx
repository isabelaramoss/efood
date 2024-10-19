import { TagContainer } from './style'

type Props = {
  children: string
}

const Tag = ({ children }: Props) => {
  return <TagContainer>{children}</TagContainer>
}

export default Tag
