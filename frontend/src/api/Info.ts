import axios from "axios"

const API = import.meta.env.VITE_API_URL;

export const WhatDoYouLikeToEat = async (data: string) => {
    try {
        const res = await axios.post(API + "/WhatDoYouLikeToEat", {
            data
        })

        return res.data
    } catch (error) {
        console.log("error in WhatDoYouLikeToEat -> ", error)   
        return
    }
}

export const FoodsYouAvoid = async (data: string) => {
    try {
        const res = await axios.post(API + "/FoodsYouAvoid", {
            data
        })

        return res.data
    } catch (error) {
        console.log("Error in FoodsYouAvoid -> ", error)
        return
    }
}

export const TellUsAboutYourSelf = async (Sex: string, Height: number, Weight: number, Age: number, BodyFat: string, ActivityLevel: string) => {
    try {
        const res = await axios.post(API + "/TellUsAboutYourSelf", {
            Sex,
            Height,
            Weight,
            Age,
            BodyFat,
            ActivityLevel
        })

        return res.data
    } catch (error) {
        console.log("error in TellUsAboutYourSelf -> ", error)
        return
    }
}

export const YourGoal = async (Goal: string) => {
    try {
        const res = await axios.post(API + "/YourGoal", {
            Goal
        })

        return res.data
    } catch (error) {
        console.log("Error in FoodsYouAvoid -> ", error)
        return
    }
}