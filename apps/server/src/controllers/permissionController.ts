import { Request, Response } from 'express'
import Permission from '../database/models/permission'
import { sendInternalErrorResponse, validateFields } from '../validator'

export const createPermission = async (req: Request, res: Response): Promise<void> => {
    try {
        const missingFields = validateFields(req, ['name'])
        if (missingFields.length) {
            res.status(400).json({
                ok: false,
                errorMessage: `Missing required fields: ${missingFields.join(', ')}`,
            })
            return
        }
        const createdPermission = await Permission.create({ name: req.body.name })
        res.status(201).json({ ok: true, data: createdPermission })
    } catch (error) {
        sendInternalErrorResponse(res, error)
        return
    }
}

export const getAllPermissions = async (req: Request, res: Response): Promise<void> => {
    try {
        const permissions = await Permission.find({})
        res.status(200).json({ ok: true, data: permissions })
    } catch (error) {
        sendInternalErrorResponse(res, error)
        return
    }
}

export const getSinglePermission = async (req: Request, res: Response): Promise<void> => {
    try {
        const permission = await Permission.findById(req.params.id)
        if (!permission) {
            res.status(404).json({ ok: false, errorMessage: 'Permission not found' })
            return
        }
        res.status(200).json({ ok: true, data: permission })
    } catch (error) {
        sendInternalErrorResponse(res, error)
        return
    }
}

export const updatePermission = async (req: Request, res: Response): Promise<void> => {
    try {
        const missingFields = validateFields(req, ['name'])
        if (missingFields.length) {
            res.status(400).json({
                ok: false,
                errorMessage: `Missing required fields: ${missingFields.join(', ')}`,
            })
            return
        }
        const permissionToUpdate = await Permission.findById(req.params.id)
        if (!permissionToUpdate) {
            res.status(404).json({ ok: false, errorMessage: 'Permission not found' })
            return
        }
        if (!req.body.name) res.status(400).json({ ok: false, errorMessage: 'Name is required' })

        permissionToUpdate.name = req.body.name

        await permissionToUpdate.save()
        res.status(200).json({ ok: true, data: permissionToUpdate })
    } catch (error) {
        sendInternalErrorResponse(res, error)
        return
    }
}

export const deletePermission = async (req: Request, res: Response): Promise<void> => {
    try {
        const permissionToDelete = await Permission.findById(req.params.id)
        if (!permissionToDelete) {
            res.status(404).json({ ok: false, errorMessage: 'Permission not found' })
            return
        }
        await permissionToDelete.deleteOne()
        res.status(200).json({ ok: true, message: 'Permission deleted successfully!' })
    } catch (error) {
        sendInternalErrorResponse(res, error)
        return
    }
}
