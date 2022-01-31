import { Operations } from '../model';

const getAllClientsService = async () => {
  try {
    const result = await Operations.getAll();
    return result
  } catch (error) {
    throw { message: 'erro no service' }
  }
};

export default getAllClientsService;