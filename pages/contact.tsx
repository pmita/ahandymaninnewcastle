import Link from 'next/link';
//COMPONENTS
import BannerContent from '../components/BannerContent';
import SplitBanner from '../layouts/SplitBanner';
import BannerImage from '../components/BannerImage';
import CTAButtons from '../layouts/CTAButtons';
import Button from '../components/Button';
//LIBRARIES
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
// STYLES
import styles from '../styles/pages/contactPage.module.scss';

export const validationSchema = z.object({
    firstName: z
        .string()
        .min(2, { message: "First name must be at least 2 characters" })
        .max(20, { message: "First name must be less than 20 characters" }),

    lastName: z
        .string()
        .min(2, { message: "Last name must be at least 2 characters" })
        .max(20, { message: "Last name must be less than 20 characters" }),
});

export type FormValues = z.infer<typeof validationSchema>;

const ContactPage = () => {
    // STATE 
    const { register, handleSubmit, formState: { errors }} = 
    useForm<FormValues>({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        resolver: zodResolver(validationSchema)
    });

    // EVENT HANDLERS
    const onSubmit = async (data: FormValues) => {
        console.log(data);
    }
    return (
        <div className={styles.contactPage}>
            <SplitBanner>
                <BannerImage imageUrl="/assets/images/PaintBrush.jpg"/>
                <BannerContent>
                    <form>
                        <input
                            type="text"
                            placeholder="First Name"
                            {...register("firstName")}
                        />
                        {errors.firstName && <p>{errors.firstName.message}</p>}
                        <input
                            type="text"
                            placeholder="Last Name"
                            {...register("lastName")}
                        />  
                        {errors.lastName && <p>{errors.lastName.message}</p>}
                    </form>
                </BannerContent>
            </SplitBanner>
        </div>
    );
}

export default ContactPage;