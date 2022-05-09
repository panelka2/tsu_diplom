import React from "react";
import ReactDOM from 'react-dom';
import styles from './style.module.scss'
import { useCatchOutsidedClick } from "../../utils/useOutsideClick";
import cn from "classnames";


function Modal({opened, children, onOutsidedClick, className, classes = {}}) {
	const container = React.useMemo(() => {
        if (typeof window !== 'undefined') {
            const containerId = 'modal'
            let el = document.getElementById(containerId);
    
            if (!el) {
                el = document.createElement('div');
                el.setAttribute('id', containerId);
                document.body.appendChild(el);
            }
    
            return el;
        }
	}, []);

    console.log(container)

	React.useEffect(() => {
		if (opened) {
			document.body.style.overflow = 'hidden';
			return () => {
				document.body.style.overflow = 'auto';
			};
		}
	}, [opened]);

	const ref = useCatchOutsidedClick({onCatch: opened ? onOutsidedClick : undefined});

	if (!opened) return null;

	return ReactDOM.createPortal(
		<div className={cn(styles.root, className, classes.root)}>
			<div ref={ref} className={cn(styles.content, classes.content)}>
				{children}
			</div>
		</div>,
		container,
	);
}

export default Modal;