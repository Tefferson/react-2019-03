import React from 'react'
import styled from 'styled-components'
import Pagination from '../pagination/pagination.component'
import JsonPlaceholderService from '../../services/json-placeholder.service'

class PhotoPaginationComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            itemsPerPage: 9
        }

        this.getItems = getItems.bind(this)
        this.renderItems = renderItems.bind(this)
    }

    render() {
        return (<Pagination renderItems={this.renderItems} getItems={this.getItems}/>)
    }
}

function getItems(page) {
    const {itemsPerPage} = this.state
    const start = itemsPerPage * (page - 1)
    return JsonPlaceholderService.getPhotos(start, itemsPerPage)
}

function renderItems(data) {
    return (
        <React.Fragment>
            {data.map(item => (
                <StyledImageContainer key={item.id}>
                    <figure className="animated scale-on-hover">
                        <img alt={item.title} src={item.url}/>
                        <figcaption>{item.title}</figcaption>
                    </figure>
                </StyledImageContainer>
            ))}
        </React.Fragment>
    )
}

const StyledImageContainer = styled.div `
  display: inline-block;
  font-size: xx-small;
  width: calc(100% / 3);

  img {
    width: 100%;
  }

  figure {
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export default PhotoPaginationComponent