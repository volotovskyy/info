import React from 'react';
import useCollapse from 'react-collapsed';

import UpIcon from '../../../assets/images/up.svg'
import DownIcon from '../../../assets/images/down.svg'

export const Fact = (props) => {
    const { fact } = props
    const config = {
        defaultExpanded: props.defaultExpanded || false,
        collapsedHeight: props.collapsedHeight || 0
    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
    
    return (
      <div>
          <div className="collapsible">
              <div className="flex justify-between items-center" {...getToggleProps()}>
                  <div className="text-lg font-bold md:text-4xl ">{fact.title}</div>
                  <img className="w-[11px] h-[5px] md:w-[19px] md:h-[10px]" src={isExpanded? UpIcon : DownIcon} alt="attention" />
              </div>
              <div {...getCollapseProps()}>
                  <div className="collapsible__content">
                      {fact.text}
                      {props.children}
                  </div>
              </div>
          </div>
          <div className="flex justify-between sm:justify-start mt-12 mb-12">
            <button className="vote-button mr-5"><span>Важливо</span> <span>{fact.up}</span></button>
            <button className="vote-button"><span>Неважливо</span> <span>{fact.down}</span></button>
          </div>
          <div className="mb-12 border-b-2 border-solid border-[#E8E8E8]"></div>
      </div>
    );
}