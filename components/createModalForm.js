import createElement from "../utils/createElement.js";

export default function articleForm(btnText, inputGroups, formId) {
    const modal = `
    <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-primary text-white ms-auto mb-4"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
              ${btnText}
              </button>

              <!-- Modal -->
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Add new article
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <form id=${formId}>
                        <div class="modal-body">
                            ${inputGroups}
                        </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
    `;
    const modalContainer = createElement("div")
    modalContainer.innerHTML = modal;
    return modalContainer;
}