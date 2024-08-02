import express, { Request, Response } from 'express';
import student from '../db/models/task1';

const StudentRouter = express.Router();

// Middleware
StudentRouter.use(express.json());

// Get all student
StudentRouter.get('/stug', async (req: Request, res: Response) => {
    try {
        const Student = await student.findAll();
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// Add a new student
StudentRouter.post('/stupo', async (req: Request, res: Response) => {
    const { Id,name, email, address } = req.body;

    try {
        const newstudent = await student.create({ Id,name, email, address });
        res.status(201).json(newstudent);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// Update an existing student
StudentRouter.put('/stup/:Id', async (req: Request, res: Response) => {
    const { Id } = req.params;
    const { name, email, address } = req.body;

    try {
        const studentToUpdate = await student.findByPk(Id);

        if (!studentToUpdate) {
            return res.status(404).json({ error: 'student not found' });
        }

        //studentToUpdate.Id = Id;
        studentToUpdate.name = name;
        studentToUpdate.email = email;
        studentToUpdate.address = address;

        await studentToUpdate.save();
        res.json(studentToUpdate);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// Delete an student
StudentRouter.delete('/stud/:Id', async (req: Request, res: Response) => {              
    const { Id } = req.params;

    try {
        const studentToDelete = await student.findByPk(Id);

        if (!studentToDelete) {
            return res.status(404).json({ error: 'student not found' });
        }

        await studentToDelete.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

export default StudentRouter;






