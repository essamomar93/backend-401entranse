'use strict';
const languageModel = require('../Model/model')
const axios = require('axios');

const getApi = async (req, res) => {
    await axios.get('https://ltuc-asac-api.herokuapp.com/programmingLangData').then(response => {
        res.send(response.data)
    })
};
const createLang = async (req, res) => {
    const {
        title,
        imageUrl,
    } = req.body
    languageModel.find({ title: title }, (error, data) => {
        if (data.length > 0) {
            res.send('this title is alredy exsist')
        } else {
            const newLang = new languageModel({
                title: title,
                imageUrl: imageUrl
            })
            newLang.save()
            res.send(newLang)
        }
    })
};
const getLang = async (req, res) => {
    languageModel.find({}, (error, data) => {
        if (error) {
            res.send(error)
        } else {
            res.send(data)
        }
    })
};
const deleteLang = async (req, res) => {
    const { id } = req.params
    languageModel.remove({ _id: id }, (error, data) => {
        if (error) {
            res.send(error)
        } else {
            languageModel.find({}, (error, data) => {
                if (error) {
                    res.send(error)
                } else {
                    res.send(data)
                }
            })
        }
    })
};
const ubdateLang = async (req, res) => {
    const { id } = req.params
    const {
        title,
        imageUrl,
    } = req.body
    languageModel.find({ _id: id }, (error, data) => {
        if (error) {
            res.send(error)
        } else {
            data[0].title = title,
                data[0].imageUrl = imageUrl
            data[0].save()
            res.send(data)
        }
    })
};


module.exports = { getApi, createLang, getLang, deleteLang, ubdateLang }