import { factorial, sum } from "../Services/NumberServices.js";
import { StatusCodes } from 'http-status-codes';

export function processFactorial(req, res) {
    try {
        var num = parseInt(req.params.n);
        // var num = req.body.x;
        if (num > 0) {
            // console.log(req.body);
            var f = factorial(num);
            res.status(StatusCodes.OK).json({ factorial: f });
        }
        else {
            res.status(StatusCodes.BAD_REQUEST).json({ message: 'Only positive numbers are allowed' });
        }
    }
    catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Something went wrong' });
    }
}

export function processSum(req, res) {
    console.log(req.body);
    var a = req.body.x;
    var b = req.body.y;
    var result = sum(a, b);
    res.status(StatusCodes.OK).json({ sum: result });
}