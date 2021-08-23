import React from 'react'
import { useStylesSignIn } from '../pages/SignIn';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

interface ModalBlockProps {
    title: string;
    children?: React.ReactNode;
    classes: ReturnType<typeof useStylesSignIn>;
    visible?: boolean;
    onClose: () => void;
}

export const ModalBlock: React.FC<ModalBlockProps> = ({ 
    title, 
    onClose, 
    children,
    classes,
    visible = false
}: ModalBlockProps): React.ReactElement | null => {
    if (!visible) {
        return null;
    }
    return (
        <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}
