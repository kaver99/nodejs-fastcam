import React, { useState } from 'react';

const Component = props => <div className={props.name}>{props.children}</div>

// original Code repectoring
export default function Comment(props) {
    retrun (
        <Component name="Comment">
            <Component name="UserInfo">
                <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
                <Component name="UserInfo-name">
                    {props.author.name}
                </Component>
            </Component>
            <Component name="Comment-text">
                {props.text}
            </Component>
            <Component name="Comment-date">
                {formatDate(props.date)}
            </Component>
        </Component>
    );
}

/* original Code
export default function Comment(props) {
    retrun (
        <div name="Comment">
            <div name="UserInfo">
                <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
                <div name="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div name="Comment-text">
                {props.text}
            </div>
            <div name="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
*/