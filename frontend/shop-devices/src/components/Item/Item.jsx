import React from "react";
import "./Item.css";
const Item = (props) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <img
        src={props.image}
        alt={`${props.brand} ${props.model}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-gray-800 text-xl font-semibold">{`${props.brand} ${props.model}`}</h2>

        {props.itemType === "laptop" && (
          <p className="text-gray-600 text-sm mt-2">
            Processor: {props.processor}
          </p>
        )}

        {/* Conditionally render RAM and Storage based on item type */}
        {(props.itemType === "mobile" || props.itemType === "laptop") && (
          <p className="text-gray-600 text-sm">RAM: {props.RAM}</p>
        )}
        {(props.itemType === "mobile" || props.itemType === "laptop") && (
          <p className="text-gray-600 text-sm">Storage: {props.storage}</p>
        )}

        {/* Conditionally render case material and water resistance based on item type */}
        {props.itemType === "watch" && (
          <p className="text-gray-600 text-sm">
            Case Material: {props.caseMaterial}
          </p>
        )}
        {props.itemType === "watch" && (
          <p className="text-gray-600 text-sm">
            Water Resistance: {props.waterResistance}
          </p>
        )}

        {/* <p className="text-gray-600 text-sm">Case Material: {props.caseMaterial}</p>
        <p className="text-gray-600 text-sm">Water Resistance: {props.waterResistance}</p> */}
        <p className="text-gray-700 font-bold mt-2">${props.cost}</p>
      </div>
    </div>
  );
};

export default Item;
