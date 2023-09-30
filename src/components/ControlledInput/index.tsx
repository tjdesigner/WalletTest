import React, { ReactNode } from 'react'
import { Control, FieldError, Controller } from 'react-hook-form'

import { ControllerContainer, ControllerContainerProps, Error, InputContainer, InputText, TextLabel } from './styles'
import theme from '../../global/styles/theme'

interface DefaultProps extends ControllerContainerProps {
    control: Control<any>
    name: string
    error?: FieldError
    label?: string
    icon?: ReactNode
}

export function ControlledInput({ control, error, name, ...rest }: DefaultProps) {
    return (
        <ControllerContainer>
            {Boolean(rest.label) && <TextLabel>{rest.label}</TextLabel>}
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <InputContainer>
                        {Boolean(rest.icon) && rest.icon}
                        <InputText
                            onChangeText={onChange}
                            value={value}
                            {...rest}
                            placeholderTextColor={theme.colors.light}
                        />
                    </InputContainer>
                )}
            />
            {error && <Error>{error.message}</Error>}
        </ControllerContainer>

    )
}