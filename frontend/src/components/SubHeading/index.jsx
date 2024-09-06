import React from "react";
import PropTypes from "prop-types";

export default function SubHeading({subHeading}) {
    return <p className="page-subtitle"> {subHeading} </p>;
}

SubHeading.prototype = {
    SubHeading: PropTypes.string.isRequired
}