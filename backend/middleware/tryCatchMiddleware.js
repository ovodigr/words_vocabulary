export const tryCatchMiddleware = async (req, res, fn) => {
    try {
        return await fn();
    }
    catch (e) {
        e.message = "Error";
        return res.status(500).json({ e: e.message })
    }
}