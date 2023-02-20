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
//ASSETS
import { Locations } from '../variables/Locations';
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
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .min(5, { message: "Email must be at least 5 characters" })
        .email({ message: "Please enter a valid email" }),
    mobilePhone: z
        .string()
        .min(1, { message: "Mobile phone is required" })
        .min(10, { message: "Mobile phone must be at least 10 characters" })
        .max(10, { message: "Mobile phone must be less than 11 characters" })
        .regex(/^[0-9]+$/, { message: "Mobile phone must be a number" }),
    location: z
        .string()
        .min(1, { message: "Location is required" })
        .refine((value) => {
            return Locations.some((location) => location.value === value);
        }, { message: "Please select a valid location" }),
    additionalDetails: z
        .string()
        .min(10, { message: "Additional info must be at least 10 characters"})
        .max(500, { message: "Additional info must be less than 500 characters" })
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
                    <form className={styles.form}>
                        <div className={styles.contactDetails}>
                            <input
                                type="text"
                                placeholder="First Name"
                                {...register("firstName")}
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                {...register("lastName")}
                                />  
                        </div>
                        
                        {errors.firstName && <p>{errors.firstName.message}</p>}
                        {errors.lastName && <p>{errors.lastName.message}</p>}
                        
                        <div className={styles.contactDetails}>
                            <input
                                type="email"
                                placeholder="Email"
                                {...register("email")}
                            />
                            <input
                                type="text"
                                placeholder="Mobile Phone"
                                {...register("mobilePhone")}
                                />  
                        </div>
                        
                        {errors.email && <p>{errors.email.message}</p>}
                        {errors.mobilePhone && <p>{errors.mobilePhone.message}</p>}
                        
                        <div className={styles.locationDetails}>
                            <select {...register("location")}>
                                {Locations.map((location) => (
                                    <option key={location.id} value={location.value}>{location.option}</option>
                                ))}
                            </select>
                        </div>
                        
                        {errors.location && <p>{errors.location.message}</p>}
                        
                        <div className={styles.additionalDetails}>
                            <textarea
                                placeholder="Tell us mores"
                                {...register("additionalDetails")}
                            />
                        </div>
                        
                        {errors.location && <p>{errors.location.message}</p>}

                        <div className={styles.callToAction}>
                            <button className="btn secondary" type="submit">
                                Submit
                            </button>
                            <h4>
                                or <span>email@google.com</span>
                            </h4>
                        </div>
                    </form>
                </BannerContent>
            </SplitBanner>
        </div>
    );
}

export default ContactPage;