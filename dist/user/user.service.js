"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entitiy/user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findAll() {
        try {
            return this.userRepository.find();
        }
        catch (error) {
            return {
                status: false,
                message: 'Error finding user',
                error: error.message,
            };
        }
    }
    async create(createUserDto) {
        try {
            const user = new user_entity_1.User();
            user.age = createUserDto.age;
            user.fullName = createUserDto.fullName;
            user.gender = createUserDto.gender;
            return this.userRepository.save(user);
        }
        catch (error) {
            return {
                status: false,
                message: 'Error finding user',
                error: error.message,
            };
        }
    }
    async findOneUser(req) {
        try {
            return this.userRepository.findOne(req);
        }
        catch (error) {
            return {
                status: false,
                message: 'Error finding user',
                error: error.message,
            };
        }
    }
    async update(req) {
        try {
            const { id, fullName, age, gender, email } = req;
            let user = await this.findOneUser(id);
            if (!user)
                return { status: false, message: 'User not found' };
            if (req.age) {
                user.age = req.age;
            }
            if (req.gender) {
                user.gender = req.gender;
            }
            if (req.fullName) {
                user.fullName = req.fullName;
            }
            return this.userRepository.save(user);
        }
        catch (error) {
            return {
                status: false,
                message: 'Error updating user',
                error: error.message,
            };
        }
    }
    async delete(req) {
        try {
            await this.userRepository.delete(req);
            return { status: true, message: 'User deleted successfully' };
        }
        catch (error) {
            return {
                status: false,
                message: 'Error deleting user',
                error: error.message,
            };
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map