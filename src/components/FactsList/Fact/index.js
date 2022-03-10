import React from 'react';
import useCollapse from 'react-collapsed';

export const Fact = (props) => {
    const { fact } = props
    const config = {
        defaultExpanded: props.defaultExpanded || false,
        collapsedHeight: props.collapsedHeight || 0
    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
    
    return (
      <div className="fact">
          <div className="collapsible">
              <div className="collapsible__header" {...getToggleProps()}>
                  <div className="collapsible__title">{fact.title}</div>
                  <div className="collapsible__icon">
                      <i className={'fas fa-angle-' + (isExpanded ? 'up' : 'down')}></i>
                  </div>
              </div>
              <div {...getCollapseProps()}>
                  <div className="collapsible__content">
                      {fact.text}
                      {props.children}
                  </div>
              </div>
          </div>
          <div className="mt-12 mb-12">
            <button className="vote-button mr-5">Важливо {fact.up}</button>
            <button className="vote-button">Неважливо {fact.down}</button>
          </div>
      </div>
    );
}