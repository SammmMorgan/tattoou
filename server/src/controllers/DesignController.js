import { designService } from "../services/DesignService.js";
import BaseController from "../utils/BaseController.js";

export class DesignController extends BaseController {
    constructor() {
        super('api/designs')
        this.router
            .get('', this.getAllDesigns)
            .get('/:designId', this.getDesignById)
            .get('/:pageNum', this.newPageOfDesigns)
    }

    /**
   * Sends all values back to the client
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
    async getAllDesigns(request, response, next) {
        try {
            const query = request.query
            const designs = await designService.getSearchedDesigns(query)
            response.send(designs)
        } catch (error) {
            next(error)
        }
    }

    async newPageOfDesigns(request, response, next) {
        try {

        } catch (error) {

        }
    }
    /**
  * Sends all values back to the client
  * @param {import("express").Request} request
  * @param {import("express").Response} response
  * @param {import("express").NextFunction} next
  */

    async getDesignById(request, response, next) {
        try {
            const id = request.params.designId
            const design = await designService.getDesignById(id)
            response.send(design)
        } catch (error) {
            next(error)
        }
    }


}