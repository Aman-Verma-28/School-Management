const MiddlewaresLoader = require("./MiddlewaresLoader");
const ValidatorsLoader = require("./ValidatorsLoader");
const ResourceMeshLoader = require("./ResourceMeshLoader");

const SchoolManager = require("../managers/school/School.manager");
const ClassroomManager = require("../managers/classroom/Classroom.manager");
const StudentManager = require("../managers/student/Student.manager");

module.exports = class ManagersLoader {
    constructor({ config, cache }) {
        this.managers = {};
        this.config = config;
        this.cache = cache;

        this._preload();

        this.injectable = {
            cache,
            config,
            managers: this.managers,
            validators: this.validators,
            resourceNodes: this.resourceNodes,
        };
    }

    _preload() {
        const validatorsLoader = new ValidatorsLoader();
        const resourceMeshLoader = new ResourceMeshLoader();

        this.validators = validatorsLoader.load();
        this.resourceNodes = resourceMeshLoader.load();
    }

    load() {
        const middlewaresLoader = new MiddlewaresLoader(this.injectable);
        this.injectable.mwsRepo = middlewaresLoader.load();

        /*****************************************CUSTOM MANAGERS*****************************************/
        this.managers.school = new SchoolManager(this.injectable);
        this.managers.classroom = new ClassroomManager(this.injectable);
        this.managers.student = new StudentManager(this.injectable);
        /*************************************************************************************************/

        return this.managers;
    }
};
