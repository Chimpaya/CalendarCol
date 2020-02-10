const getBarTitle = (data, type) => {
  let title = ''
  switch (type) {
    case 'plan':
      {
        title = data.title
        break
      }
  }

  return title
}

const getColumnLabel = (columnData, type) => {

  let label = ''
  switch (type) {
    case 'user': {
      const { name } = columnData

      label = name
      break
    }
  }

  return label
}

export { getBarTitle, getColumnLabel }