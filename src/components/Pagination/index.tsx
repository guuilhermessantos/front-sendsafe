import React from 'react'
import styled from 'styled-components'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;
`

const PageButton = styled.button<{ isActive: boolean; disabled?: boolean }>`
  padding: 4px 8px;
  margin: 0 3px;
  background-color: ${({ isActive, disabled, theme }) =>
    disabled
      ? theme.colors.disabled
      : isActive
      ? theme.colors.primary
      : theme.colors.backgroundAlt};
  color: ${({ isActive, disabled, theme }) =>
    disabled
      ? theme.colors.textSecondary
      : isActive
      ? theme.colors.arrow
      : theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-size: 12px;

  &:hover {
    background-color: ${({ isActive, disabled, theme }) =>
      disabled
        ? theme.colors.disabled
        : isActive
        ? theme.colors.primaryHover
        : theme.colors.shapeLow};
  }

  @media (max-width: 600px) {
    padding: 4px 6px;
    font-size: 10px;
  }
`

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  const handlePageClick = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page)
    }
  }

  const handleFirstPage = () => {
    onPageChange(1)
  }

  const handleLastPage = () => {
    onPageChange(totalPages)
  }

  const getVisiblePages = () => {
    const visiblePages: number[] = []

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, 5]
    }

    if (currentPage >= totalPages - 2) {
      return [
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      ]
    }

    return [currentPage - 1, currentPage, currentPage + 1]
  }

  return (
    <PaginationContainer>
      <PageButton
        isActive={currentPage > 1}
        onClick={handleFirstPage}
        disabled={currentPage === 1}
      >
        <i className="bx bx-chevrons-left" />
      </PageButton>

      <PageButton
        isActive={currentPage > 1}
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <i className="bx bx-chevron-left" />
      </PageButton>

      {getVisiblePages().map(number => (
        <PageButton
          key={number}
          isActive={number === currentPage}
          onClick={() => handlePageClick(number)}
        >
          {number}
        </PageButton>
      ))}

      <PageButton
        isActive={currentPage < totalPages}
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <i className="bx bx-chevron-right" />
      </PageButton>

      <PageButton
        isActive={currentPage < totalPages}
        onClick={handleLastPage}
        disabled={currentPage === totalPages}
      >
        <i className="bx bx-chevrons-right" />
      </PageButton>
    </PaginationContainer>
  )
}

export default Pagination
