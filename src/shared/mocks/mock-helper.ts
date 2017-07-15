import { Response, ResponseOptions } from '@angular/http';

let getMockResponse = (body: any) => {
  return new Response(new ResponseOptions({ body: JSON.stringify(body) }))
};

export default {
  getMockResponse
};