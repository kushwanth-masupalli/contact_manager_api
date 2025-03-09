const express = require('express');
const asynchandler = require('express-async-handler');
const contact = require('../dbconnection/schema');

// Get all contacts
const getcontacts = asynchandler(async (req, res) => {
  console.log("in the controller")
  const contacts = await contact.find();
  res.json(contacts);
});

// Create a new contact
const createcontact = asynchandler(async (req, res) => {
  const { name, email, phoneno } = req.body;
  if (!name || !email || !phoneno) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const cont = await contact.create({ name, email, phoneno });
  res.status(201).json(cont);
});

// Get a single contact by ID
const getcontact = asynchandler(async (req, res) => {
  const requiredcontact = await contact.findById(req.params.id);
  if (!requiredcontact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.json(requiredcontact);
});

// Update a contact by ID
const updatecontact = asynchandler(async (req, res) => {
    const updatedContact = await contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
  
    if (!updatedContact) {
      res.status(404).json({ message: "Contact not found" });
      return;
    }
  
    res.json(updatedContact);
  });
  

// Delete a contact by ID
const deletecontact = asynchandler(async (req, res) => {
  const cont = await contact.findByIdAndDelete(req.params.id);
  if (!cont) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.json({ message: "Contact deleted successfully" });
});

module.exports = { getcontacts, createcontact, getcontact, updatecontact, deletecontact };
