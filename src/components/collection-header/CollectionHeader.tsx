import HeaderLayout from '@components/layout/header-layout/HeaderLayout'
import { Routes } from '@util/constants'
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const CollectionHeader = () => {
  const navigate = useNavigate()
  return (
    <HeaderLayout>
      <IoArrowBack onClick={() => navigate(Routes.DEFAULT_ROUTE)} />
      <h1>Коллекция</h1>
      <h1 />
    </HeaderLayout>
  )
}

export default CollectionHeader
