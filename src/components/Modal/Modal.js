
export default function Modal(props) {
    return (<>
        {!props.noBtn ? <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${props.id}`}>
            View
        </button> : null
        }
        <div className="modal fade" id={props.id}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content w-100">
                    <div className="modal-header bg-success">
                        <h5 className="modal-title">{props.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body p-4">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    </>);
}




