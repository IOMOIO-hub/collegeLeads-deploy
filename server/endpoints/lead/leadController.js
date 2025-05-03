import { send } from "../../mailer.js";


class leadController {
  async createLead(req, res) {
    send(req.body.name, req.body.telegram, req.body.origin)
  }
}

export default new leadController()