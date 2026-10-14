import pool from "../db.js";
import bcrypt from 'bcrypt'

export const signup=async (req,res) => {
    try {
        const {full_name,email,password}=req.body
        if(!full_name || !email || !password){
            return res.status(400).json({
                message:"All fields are required for signup"
            })
        }
        const hashedPassword=await bcrypt.hash(password,12)
        const result=await pool.query(`INSERT INTO users(full_name,email,password) VALUES ($1,$2,$3) RETURNING full_name,email`,[full_name,email,hashedPassword]);
        res.status(200).json({
            message:`${email} created successfully`
        })
    } catch (error) {
        console.error(error);
        
        if(error.code === "23505"){
            return res.status(409).json({
                message:"Account exists"
            })
        }
        res.status(500).json({
            message:"Problem encountered in signup"
        })

    }
}