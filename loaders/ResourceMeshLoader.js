module.exports = class ResourceMeshLoader {
    constructor() {}

    load() {
        return {
            roles: {
                SUPERADMIN: "Superadmin",
                SCHOOL_ADMIN: "SchoolAdmin",
            },
        };
    }
};
