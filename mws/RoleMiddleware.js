module.exports = (allowedRoles) => (req, res, next) => {
    console.log("🔒 RoleMiddleware");
    console.log("allowedRoles", allowedRoles);
    console.log("req.user", req.user);
    
    if (!req.user || !allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ message: "Forbidden - Access denied" });
    }
    next();
};
