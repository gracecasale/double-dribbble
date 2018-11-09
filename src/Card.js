import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
    return (
        <div>
            <div className="card p-2" style={{ width: '16rem' }}>
                <img className="card-img-top" src={props.src} alt="Card image cap" />
                <div className="card-body d-flex justify-content-end p-1">
                    <span><i className="fa fa-eye text-muted mx-1 text-small">{props.views}</i></span>
                    <span><i className="fa fa-comment text-muted mx-1 text-small">{props.comments}</i></span>
                    <span><i className="fa fa-heart text-muted mx-1 text-small">{props.likes}</i></span>
                </div>
            </div>
        </div>
    );
}
Card.propTypes = {
    src: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
};

export default Card;