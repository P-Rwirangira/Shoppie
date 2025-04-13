import { Request, Response } from 'express'
import Role from '../database/models/role'
import logger from '../helpers/logger'
import { sendInternalErrorResponse } from '../validator'

// Function to create a new role
export const createRole = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, displayName } = req.body
        const newRole = await Role.create({ name, displayName })
        res.status(201).json({ ok: true, message: newRole })
        return
    } catch (error) {
        logger.error('Error creating role:', error)
        sendInternalErrorResponse(res, error)
    }
}

// Function to get all roles
export const getAllRoles = async (req: Request, res: Response): Promise<void> => {
    try {
        const roles = await Role.find()
        res.status(200).json({
            ok: true,
            message: roles,
        })
        return
    } catch (error) {
        logger.error('Error fetching roles:', error)
        sendInternalErrorResponse(res, error)
    }
}

// Function to update a role
export const updateRole = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const updatedRole = await Role.findByIdAndUpdate(id, req.body, { new: true })
        if (!updatedRole) {
            res.status(404).json({
                ok: false,
                message: 'Role not found',
            })
            return
        }
        res.status(200).json({
            ok: true,
            message: updatedRole,
        })
    } catch (error) {
        logger.error('Error updating role:', error)
        sendInternalErrorResponse(res, error)
    }
}

// Function to delete a role
export const deleteRole = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const deletedRole = await Role.findByIdAndDelete(id)
        if (!deletedRole) {
            res.status(404).json({ ok: false, message: 'Role not found' })
            return
        }
        res.status(200).json({ ok: true, message: 'Role deleted successfully' })
    } catch (error) {
        logger.error('Error deleting role:', error)
        sendInternalErrorResponse(res, error)
    }
}
