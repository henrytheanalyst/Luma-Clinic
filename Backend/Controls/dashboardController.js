
import pool from "../db.js";

export const getDashboardStats = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT
                (SELECT COUNT(*) FROM patients)
                    AS total_patients,

                (SELECT COUNT(*)
                 FROM patients
                 WHERE created_at::date = CURRENT_DATE)
                    AS new_patients_today,

                (SELECT COUNT(*)
                 FROM appointments
                 WHERE appointment_date = CURRENT_DATE)
                    AS appointments_today,

                (SELECT COUNT(*)
                 FROM appointments
                 WHERE status = 'pending')
                    AS pending_appointments
        `);

        res.status(200).json({
            message: "Dashboard statistics fetched successfully",
            data: result.rows[0]
        });

    } catch (error) {
        console.error("Dashboard statistics error:", error);

        res.status(500).json({
            message: "Failed to fetch dashboard statistics"
        });
    }
};
