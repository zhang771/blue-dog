import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import type { RoleService } from './role.service'
import { Role } from './entities/role.entity'
import type { CreateRoleInput } from './dto/create-role.input'
import type { UpdateRoleInput } from './dto/update-role.input'

@Resolver(() => Role)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Mutation(() => Role)
  createRole(@Args('createRoleInput') createRoleInput: CreateRoleInput) {
    return this.roleService.create(createRoleInput)
  }

  @Query(() => [Role], { name: 'role' })
  findAll() {
    return this.roleService.findAll()
  }

  @Query(() => Role, { name: 'role' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.roleService.findOne(id)
  }

  @Mutation(() => Role)
  updateRole(@Args('updateRoleInput') updateRoleInput: UpdateRoleInput) {
    return this.roleService.update(updateRoleInput.id, updateRoleInput)
  }

  @Mutation(() => Role)
  removeRole(@Args('id', { type: () => Int }) id: number) {
    return this.roleService.remove(id)
  }
}
