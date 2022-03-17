
export default function Modal(props) {
    return (<>
        {!props.noBtn ? <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            View
        </button> : null}
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content w-100">
                    <div class="modal-header bg-success">
                        <h5 class="modal-title" id="staticBackdropLabel">{props.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-4">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    </>);
}




