import React, { Component } from 'react';

export const LoadState = (name) => {
    try {
        //setLocalStorage();
        const serializeState = localStorage.getItem(name);
        if (serializeState == null) {
            return null;
        }
        return JSON.parse(serializeState);
    }
    catch (err) {
        return null;
    }
}
export const setLocalStorage = (name,obj) => {
    try {
        localStorage.setItem(name, JSON.stringify(obj));
    }
    catch (err) {
        console.log('error setting local storage');
    }
}