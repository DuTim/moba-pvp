/*
 * @Description: 
 * @Author: DuTim
 * @Date: 2019-12-24 15:11:09
 * @LastEditors  : Dutim
 * @LastEditTime : 2020-01-31 22:05:30
 */
const mongoose = require('mongoose')
//结构
const schema = new mongoose.Schema({
    name: {
        type: String
    },
    title: {
        type: String
    },
    avatar: {
        type: String
    },
    banner: {
        type: String
    },
    categories: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
    }],
    scores: {
        difficult: {
            type: Number
        },
        skills: {
            type: Number
        },
        attack: {
            type: Number
        },
        survive: {
            type: Number
        },
    },
    skills: [{
        icon: {
            type: String
        },
        name: {
            type: String
        },
        description: {
            type: String
        },
        tips: {
            type: String
        },
        delay: {
            type: String
        },
        cast: {
            type: String
        }
    }],

    items1: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Item'
    }],
    items2: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Item'
    }],
    usageTips: {
        type: String
    },
    battleTips: {
        type: String
    },
    partners: [{
        hero: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Hero'
        },
        description: {
            type: String

        }
    }]
})
//模型
const Hero = mongoose.model('Hero', schema, 'heroes')
module.exports = Hero