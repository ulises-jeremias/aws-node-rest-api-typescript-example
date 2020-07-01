import { Model, PartitionKey } from '@shiftcoders/dynamo-easy';

@Model()
export class Project {
  @PartitionKey()
  id: string
  name: string
  description?: string
}
