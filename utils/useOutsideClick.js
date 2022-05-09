import React from 'react';

export const useCatchOutsidedClick = ({onCatch}) => {
	const ref = React.useRef(null);

	React.useEffect(() => {
		if (!onCatch) {
			return;
		}

		const handleClose = (event) => {
			const target = event.target;

			if (ref.current && !ref.current.contains(target)) {
				onCatch();
			}
		};

		document.addEventListener('click', handleClose, true);

		return () => {
			document.removeEventListener('click', handleClose, true);
		};
	}, [onCatch]);

	return ref;
};