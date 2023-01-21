import { StatusCodes } from "http-status-codes";
import { getEmployeeById, getEmployees, getHighestSalaryEmployee, insertEmployee } from "../Services/EmployeeService.js";

export function save(req, res) {
    try {
        insertEmployee(req.body);
        res.status(StatusCodes.CREATED).json({ message: 'employee created' })
    }
    catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Error in saving employee' })
    }
}

export function fetchAll(req, res) {
    try {
        const employees = getEmployees()
        if (employees.length > 0) {
            getEmployees(res.body);
            res.status(StatusCodes.OK).json(employees)
        }
        else {
            res.status(StatusCodes.NOT_FOUND).json({ message: 'Employee not found' })
        }
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Error in fetching employee' })
    }
}

export function fetchById(req, res) {
    try {
        const employee = getEmployeeById(req.params.id);
        if (employee) {
            res.status(StatusCodes.OK).json(employee);
        }
        else {
            res.status(StatusCodes.NOT_FOUND).json({ message: 'Employee not found' })
        }
    }
    catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Error in fetching employee' })
    }
}

export function fetchHighestPaid(req, res) {
    try {
        const employee = getHighestSalaryEmployee();
        res.status(StatusCodes.OK).json(employee);
    }
    catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Error in fetching employee' })
    }
}