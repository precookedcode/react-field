import React, { useEffect } from 'react';

interface FieldProps {
    type: string; // Tipo del campo, como 'text', 'number', 'textarea', 'checkbox', etc.
    label: string; // Etiqueta del campo
    description?: string; // Descripción opcional para guiar al usuario
    containerStyles?: React.CSSProperties; // Estilos aplicados al contenedor del campo
    headerStyles?: React.CSSProperties; // Estilos aplicados al header
    bodyStyles?: React.CSSProperties; // Estilos aplicados al body
    className?: string;
    id?: string;
    onChange: (e: any) => void; // Prop para manejar el cambio de valor
    value?: any; // Valor actual del campo
    [key: string]: any; // Para soportar props adicionales según el tipo de campo
}

const Field: React.FC<FieldProps> = ({
    type,
    label,
    description,
    containerStyles,
    headerStyles,
    bodyStyles,
    className,
    id,
    onChange,
    value,
    ...props
}) => {
    useEffect(() => {
        console.log("value", value)
    }, [value])
    return (
        <div id={id} className={`field-container ${className}`} style={containerStyles}>
            <div className="field-header" style={headerStyles}>
                <label>{label}</label>
                {description && <p className="field-description">{description}</p>}
            </div>
            <div className="field-body" style={bodyStyles}>
                {/* Renderiza el campo dependiendo del tipo */}
                {type === 'text' && (
                    <TextField
                        value={value}
                        onChange={onChange}
                        {...props}
                    />
                )}
                {type === 'textarea' && (
                    <TextAreaField value={value} onChange={onChange} {...props} />
                )}
                {type === 'checkbox' && (
                    <CheckboxField checked={value} onChange={onChange} {...props} />
                )}
                {/* Aquí podrías agregar más tipos de campos */}
            </div>
        </div>
    );
};

export default Field;
